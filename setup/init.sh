#!/usr/bin/env bash
set -euo pipefail

authenticator=$(mktemp)
trap 'rm -f "$authenticator"' EXIT

echo "Looking up the GitHub Actions IAM user"
user_arn=$(aws iam get-user --user-name github-action-user --query 'User.Arn' --output text)

echo "Downloading the Kubernetes IAM authenticator"
curl --fail --location \
  https://github.com/kubernetes-sigs/aws-iam-authenticator/releases/download/v0.6.2/aws-iam-authenticator_0.6.2_linux_amd64 \
  --output "$authenticator"
chmod +x "$authenticator"

echo "Granting cluster access"
"$authenticator" add user \
  --userarn="$user_arn" \
  --username=github-action-role \
  --groups=system:masters \
  --kubeconfig="$HOME/.kube/config" \
  --prompt=false

echo "Cluster access configured"
