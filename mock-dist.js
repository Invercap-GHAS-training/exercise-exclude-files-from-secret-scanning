// mock-dist.js
// Fake secrets for testing detection (this should NOT be ignored)

const PRIVATE_TOKEN = "ghp_FAKEGitHubToken1234567890";
const PASSWORD = "super_fake_password_123";

console.log("Root JS file that should be detected by secret scanning.");
// This file should trigger secret scanning since it's not in an ignored path.
