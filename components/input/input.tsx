import BaseInput from "./base-input";
import InputAddonAfter from "./input-addon-after";
import InputAddonBefore from "./input-addon-before";
import InputGroup from "./input-group";
import InputPrefix from "./input-prefix";
import InputSuffix from "./input-suffix";

const Input = Object.assign(BaseInput, {
  Group: InputGroup,
  Prefix: InputPrefix,
  Suffix: InputSuffix,
  AddonBefore: InputAddonBefore,
  AddonAfter: InputAddonAfter,
});

export default Input;
