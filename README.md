## Runscope API Test Generator for Paw

This generator will allow you to create files that you can import into Runscope to create API tests from Paw.

Use the Export or Export All functions in Paw to generate a file from one or more requests. From the (Runscope importer](https://www.runscope.com/radar/import) select "Runscope API Test" and upload the file generated.

### Known Issues:

- OAuth 2 and S3 Signature settings are not exported
- OAuth 1 additional parameters, nonce and timestamp are not exported
- Redirect and cookie settings are not exported (these can configured in your Runscope environments)