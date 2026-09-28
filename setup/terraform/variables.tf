variable "aws_region" {
  type        = string
  description = "AWS region used for all deployment infrastructure."
  default     = "us-east-1"
}

variable "k8s_version" {
  type        = string
  description = "Kubernetes control-plane and node-group version."
  default     = "1.30"
}

variable "enable_private" {
  type        = bool
  description = "Whether the Kubernetes API endpoint is private only."
  default     = false
}

variable "public_az" {
  type        = string
  description = "Change this to a letter a-f only if you encounter an error during setup"
  default     = "a"
}

variable "private_az" {
  type        = string
  description = "Change this to a letter a-f only if you encounter an error during setup"
  default     = "b"
}
