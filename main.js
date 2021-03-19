function disp(cmd) {
    if (cmd == "=") {
      document.form.text.value = eval(document.form.text.value);
    } else if (cmd == "AC") {
      document.form.text.value = "";
    } else {
      document.form.text.value += cmd;
    }
}
