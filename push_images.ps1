$files = git ls-files --others --exclude-standard public/
foreach ($file in $files) {
    Write-Host "Pushing $file..."
    git add "$file"
    git commit -m "Upload: $file"
    git push
    if ($LASTEXITCODE -ne 0) {
        Write-Host "Failed to push $file, trying again..."
        git push
    }
}
