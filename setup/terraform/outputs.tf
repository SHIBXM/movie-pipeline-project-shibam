output "frontend_ecr" {
  description = "Repository URL used by the frontend deployment workflow."
  value       = aws_ecr_repository.frontend.repository_url
}
output "backend_ecr" {
  description = "Repository URL used by the backend deployment workflow."
  value       = aws_ecr_repository.backend.repository_url
}

output "cluster_name" {
  description = "EKS cluster targeted by the deployment workflows."
  value       = aws_eks_cluster.main.name
}

output "cluster_version" {
  description = "Active EKS version."
  value       = aws_eks_cluster.main.version
}

output "github_action_user_arn" {
  description = "IAM user that must be granted Kubernetes access."
  value       = aws_iam_user.github_action_user.arn
}
