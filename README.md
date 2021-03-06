# Deploy the your mano-1234 applicaton by using github actions
![Github Actions](https://readmegeppetto.s3.amazonaws.com/githubactions.jpeg)

Deploy the your generated application in aws by using github actions.

- Clone the <> repo and paste the all folders and files to your own repo.

- First copy the github action folder in the below path and paste in root directory, by using the below commands in the terminal .
```sh
$ mkdir ../../../../.github && cp -r * ../../../../.github/
```
- An github actions will triggered when code is pushed to branch(master, main and geppetto)  in a repository.

- Before the push code to to your repo you need to give your aws details in [github secrets](https://docs.github.com/en/actions/reference/encrypted-secrets). What are keys you need to give as below.

|s.no| Key           | Value  |
| ---|:-------------:| :-----:|
| 01 | [AWS_ACCOUNT_ID](https://docs.aws.amazon.com/IAM/latest/UserGuide/console_account-alias.html) | A 12-digit number, such as 123456789012, that uniquelyidentifies an AWS account. |
| 02 | [AWS_ACCESS_KEY_ID](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)      |   Specifies the AWS access key used as part of the credentials to authenticate the user. |
| 03 | [AWS_SECRET_ACCESS_KEY](https://docs.aws.amazon.com/powershell/latest/userguide/pstools-appendix-sign-up.html)      |    Specifies the AWS secret key used as part of the credentials to authenticate the user. |
| 04 | [AWS_REGION](https://aws.amazon.com/about-aws/global-infrastructure/regions_az/)      |    AWS_REGION provides details about a specific AWS region. |
| 05 | [AWS_ECS_CLUSTER_NAME](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/create_cluster.html)      |    The name of the ECS cluster (up to 255 letters, numbers, hyphens, and underscores) |
| 06 | [AWS_ROLE_FOR_FARGATE](https://docs.aws.amazon.com/AmazonECS/latest/developerguide/task_execution_IAM_role.html)     |    The task execution role grants the Amazon ECS container and Fargate agents permission to make AWS API calls on your behalf. |
| 07 | [AWS_VPC_NAME](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)      |   The name of the VPC cluster. |
| 08 | [AWS_VPC_SUBNET](https://docs.aws.amazon.com/vpc/latest/userguide/working-with-vpcs.html)      |    The name of the subnet created on the above AWS_VPC_NAME. |
| 09 | [AWS_VPC_SECURITY_GROUP](https://docs.aws.amazon.com/vpc/latest/userguide/VPC_SecurityGroups.html)     |    The name of the security name. |
