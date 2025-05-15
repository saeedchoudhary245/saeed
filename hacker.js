window.addEventListener("load", () => {
  const btn = document.getElementById("clicker");

  // Simulate user interaction to enable fullscreen
  btn.click();

  btn.addEventListener("click", () => {
    const elem = document.documentElement;
    if (elem.requestFullscreen) {
      elem.requestFullscreen().catch(() => {});
    }

    // Remove fake button after fullscreen is requested
    btn.remove();

    // Start hacker effect
    setTimeout(startHackerEffect, 2000);

    // Stop effect after 1 minute
    setTimeout(stopPage, 60000);
  });
});

function startHackerEffect() {
  const terminal = document.getElementById("terminal");
  const chars = "01#@$%&*ABCDEFGHIJKLMN";
  let lines = 0;

  const interval = setInterval(() => {
    let line = "";
    for (let i = 0; i < 80; i++) {
      line += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    terminal.textContent += line + "\n";
    lines++;
    if (lines > 100) {
      terminal.textContent = terminal.textContent.split("\n").slice(-100).join("\n");
    }
  }, 50);

  window.hackerInterval = interval;
}

function stopPage() {
  clearInterval(window.hackerInterval);
  document.body.innerHTML = "";
  document.body.style.background = "black";
}

window.addEventListener("beforeunload", (e) => {
  e.preventDefault();
  e.returnValue = "";
});
