provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "builders-scheduler-terraform-remote-bucket"
    key    = "builders-scheduler-website"
    region = "eu-west-2"
  }
}
