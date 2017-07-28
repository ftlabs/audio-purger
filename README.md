# audio-purger

Use this service to delete all associated audio files and metadata for a given UUID.

# Usage

```bash
curl -X DELETE --header 'token: <abcdef>' 'http://local.ft.com:3000/purge/<uuid>'
```

# Development

## Environment variables

Ensure the following env vars are set:

* TOKEN [required] - the access token required to use the service
* AWS_AUDIO_BUCKET [required]
* AWS_AUDIO_METADATA_TABLE [required]
* AWS_ACCESS_TOKEN [required]
* AWS_SECRET_ACCESS_KEY [required]
* FT_AVAILABILITY_SERVICE_URL [required]

* AWS_REGION [optional] - defaults to 'us-west-2'
* PORT [optional] - defaults to 3001
