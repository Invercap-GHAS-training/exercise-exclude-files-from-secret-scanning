# Mock Documentation with Secrets

This file is placed inside the docs/ folder to test secret scanning exclusion.

## Fake secrets for testing

GITHUB_TOKEN: ghp_1234567890abcdefghijklmnopqrstuvwxyz  
AWS_ACCESS_KEY_ID: AKIAIOSFODNN7EXAMPLE  
AWS_SECRET_ACCESS_KEY: wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY  
STRIPE_API_KEY = sk_test_4eC39HqLyjWDarjtT1zdp7dc

## Notes
If the configuration `- "**/docs/**"` is working, this file should be ignored by secret scanning.
