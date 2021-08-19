# Pipeline Flow

CircleCI is given access to the repo where we want the pipeline to implement. Whenever code is pushed to the main branch of the repo CircleCI is triggered to run the pipeline.

## Circle CI

Circle starts executing the statements from `config.yml` file. For the api the backend is build, archied and uploaded to EB environment. Whereas for the frontend the build is made and uploaded to the static hosting S3 bucket
