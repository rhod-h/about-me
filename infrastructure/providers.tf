provider "aws" {
  region = var.aws_region
}

terraform {
  backend "s3" {
    bucket = "rhodh-terraform-remote-bucket"
    key    = "about-me-infra"
    region = "eu-west-2"
  }
}
