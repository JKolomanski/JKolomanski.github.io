function githubButtonClicked(){
    window.open('https://github.com/JKolomanski');
}

async function copyEmailToClipboard() {
    const myEmail = 'kubula@onet.eu'

    try {
        await navigator.clipboard.writeText(myEmail);
        alert("Copied the email adress to clipboard");
    } catch (err) {
        alert("Failed to copy the adress. Please copy it manually: kubula@onet.eu");
    }
}