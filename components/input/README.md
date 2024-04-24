# Anatomy

![image](https://github.com/f-lab-edu/design-hub/assets/84058944/5aa16c46-0b55-431b-9ed9-fb37ba0996c8)


# Usage

```tsx
import { Input } from "@hub/hds/components";


      <Input.Group>
        <Input
          variant="filled"
          prefix={
            <Input.Prefix>
              <GithubIcon />
            </Input.Prefix>
          }
          suffix={
            <Input.Suffix>
              <SearchIcon />
            </Input.Suffix>
          }
          addonBefore={<Input.AddonBefore>https://</Input.AddonBefore>}
          addonAfter={<Input.AddonAfter>.com</Input.AddonAfter>}
          style={{ width: "300px" }}
          size="lg"
        />
      </Input.Group>
```
