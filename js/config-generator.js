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

          &kp ${leftKeymap["r1c1"]}   &kp ${leftKeymap["r2c1"]} &kp ${leftKeymap["r3c1"]} &kp ${leftKeymap["r4c1"]} &kp ${leftKeymap["r5c1"]} &kp ${leftKeymap["r6c1"]}                    &kp ${rightKeymap["l1c1"]} &kp ${rightKeymap["l2c1"]} &kp ${rightKeymap["l3c1"]} &kp ${rightKeymap["l4c1"]} &kp ${rightKeymap["l5c1"]} &kp ${rightKeymap["l6c1"]}

          &kp ${leftKeymap["r1c2"]} &kp ${leftKeymap["r2c2"]} &kp ${leftKeymap["r3c2"]} &kp ${leftKeymap["r4c2"]} &kp ${leftKeymap["r5c2"]} &kp ${leftKeymap["r6c2"]}                    &kp ${rightKeymap["l1c2"]} &kp ${rightKeymap["l2c2"]} &kp ${rightKeymap["l3c2"]} &kp ${rightKeymap["l4c2"]} &kp ${rightKeymap["l5c2"]} &kp ${rightKeymap["l6c2"]}

          &kp ${leftKeymap["r1c3"]} &kp ${leftKeymap["r2c3"]} &kp ${leftKeymap["r3c3"]} &kp ${leftKeymap["r4c3"]} &kp ${leftKeymap["r5c3"]} &kp ${leftKeymap["r6c3"]}                    &kp ${rightKeymap["l1c3"]} &kp ${rightKeymap["l2c3"]} &kp ${rightKeymap["l3c3"]} &kp ${rightKeymap["l4c3"]} &kp ${rightKeymap["l5c3"]} &kp ${rightKeymap["l6c3"]}

                      &kp ${leftKeymap["left-special-key-one"]} &kp ${leftKeymap["left-special-key-two"]} &mo ${leftKeymap["left-special-key-three"]}                    &kp ${rightKeymap["right-special-key-one"]} &kp ${rightKeymap["right-special-key-two"]} &kp ${rightKeymap["right-special-key-three"]}

      // #---------|-----|-----|------------|-----------|-----------------#----------|-----|-------------|-----|-----------------|--------------#
      >`;

  console.log(formattedOutput);
  console.log(leftKeymap);
}
