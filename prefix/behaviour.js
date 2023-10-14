const behaviours = {
  "&bl": "Backlight",
  "&bt": "Bluetooth",
  "&caps_word": "Caps word behavior",
  "&ext_power": "External Power",
  "&gresc": "Mod Morph Behavior",
  "&kp": "Key Press",
  "&key_repeat": "Key repeat behavior",
  "&kt": "Key Toggle",
  "&lt": "Layer/Tap",
  "&mt": "Mod/Tap",
  "&mo": "Momentary Layer",
  "&none": "None Binding Behavior",
  "&out": "Output",
  "&sys_reset": "Keyboard Reset Behavior",
  "&bootloader": "Keyboard Reset Behavior",
  "&rgb_ug": "RGB Underglow",
  "&sk": "Sticky Key",
  "&sl": "Sticky Layer",
  "&to": "To Layer",
  "&tog": "Toggle Layer",
  "&trans": "Transparent Binding Behavior",
  "&as_ht": "autoshift_hold_tap",
  "&hml": "homewrow_mods_left",
  "&hmr": "homewrow_mods_right",
};

document.addEventListener("DOMContentLoaded", function (event) {
  const listContainer = document.getElementById("behaviours-list");

  for (const key in behaviours) {
    const listItem = document.createElement("li");
    listItem.textContent = `${key} ${behaviours[key]}`;
    listContainer.appendChild(listItem);
  }
});
