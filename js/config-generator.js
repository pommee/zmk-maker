function generateConfig() {
  const leftKeys = document.querySelectorAll(".left-keyboard .key");
  const rightKeys = document.querySelectorAll(".right-keyboard .key");

  const leftKeymap = {};
  const rightKeymap = {};

  leftKeys.forEach((key, index) => {
    const id = key.getAttribute("id");
    const value = key.textContent.trim();
    leftKeymap[id] = value;
  });

  rightKeys.forEach((key, index) => {
    const id = key.getAttribute("id");
    const value = key.textContent.trim();
    rightKeymap[id] = value;
  });

  const formattedOutput = `
      <
      // #---------|-----|-----|------------|-----------|-----------------#----------|-----|-------------|-----|-----------------|--------------#

          &kp ${leftKeymap["r1c1"]}   &kp ${leftKeymap["r2c1"]} &kp ${leftKeymap["r2c1"]} &kp ${leftKeymap["r2c1"]} &kp ${leftKeymap["r2c1"]}       &kp ${leftKeymap["r2c1"]}                    &kp ${rightKeymap["l1c1"]}      &kp ${rightKeymap["l2c1"]} &kp ${rightKeymap["l2c1"]}         &kp ${rightKeymap["l2c1"]} &kp ${rightKeymap["l2c1"]}      &kp BSPC

          &kp ${leftKeymap["r1c2"]} &kp ${leftKeymap["r2c2"]} &kp ${leftKeymap["r2c2"]} &kp ${leftKeymap["r2c2"]} &kp ${leftKeymap["r2c2"]}       &kp ${leftKeymap["r2c2"]}                    &kp ${rightKeymap["l1c2"]}      &kp ${rightKeymap["l2c2"]} &kp ${rightKeymap["l2c2"]}         &kp ${rightKeymap["l2c2"]} &kp ${rightKeymap["l2c2"]}      &kp RET

          &kp ${leftKeymap["r1c3"]} &kp ${leftKeymap["r2c3"]} &kp ${leftKeymap["r2c3"]} &kp ${leftKeymap["r2c3"]} &kp ${leftKeymap["r2c3"]}       &kp ${leftKeymap["r2c3"]}                    &kp ${rightKeymap["l1c3"]}      &kp ${rightKeymap["l2c3"]} &kp ${rightKeymap["l2c3"]}         &kp ${rightKeymap["l2c3"]} &kp ${rightKeymap["l2c3"]}      NONE   NONE

                   &kp LEFT_ALT      &kp SPACE   &mo SYMBOLS              &kp V      &kp V     &kp V

      // #---------|-----|-----|------------|-----------|-----------------#----------|-----|-------------|-----|-----------------|--------------#
      >`;

  console.log(formattedOutput);
}
