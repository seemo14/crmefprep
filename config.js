 (cd "$(git rev-parse --show-toplevel)" && git apply --3way <<'EOF' 
diff --git a/config.js b/config.js
new file mode 100644
index 0000000000000000000000000000000000000000..21d4014739bb6b06d1731157b54aa184505b9026
--- /dev/null
+++ b/config.js
@@ -0,0 +1,6 @@
+// Update these values for local development or let the GitHub Actions deployment
+// overwrite them with repository secrets. Leaving them empty keeps the app in
+// anonymous mode with a placeholder Firebase configuration.
+window.__firebase_config = {};
+window.__app_id = 'default-gradebook-app';
+window.__initial_auth_token = '';
 
EOF
)
