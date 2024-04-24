import { type ComponentProps } from "react";

import { type StoryFn } from "@storybook/react";

import Input from "../input";

export default {
  title: "Components/Input",
  component: Input,
  tags: ["autodocs"],
  decorators: [
    (story: any) => (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "16px" }}>
        {story()}
      </div>
    ),
  ],
};

type Args = ComponentProps<typeof Input>;

const Template: StoryFn = (args) => <Input {...args} />;

export const BasicInput: StoryFn<Args> = Template.bind({});
BasicInput.args = {
  placeholder: "Basic Input",
};

export const Sizes = (props: Args) => (
  <>
    <Input {...props} size="xs" placeholder="xs" />
    <Input {...props} size="sm" placeholder="sm" />
    <Input {...props} size="md" placeholder="md" />
    <Input {...props} size="lg" placeholder="lg" />
  </>
);

Sizes.args = {
  variant: "outline",
};

Sizes.argTypes = {
  variant: {
    control: "select",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
};

export const Variants = (props: Args) => (
  <>
    <Input {...props} variant="outline" placeholder="outline" />
    <Input {...props} variant="filled" placeholder="filled" />
    <Input {...props} variant="flushed" placeholder="flushed" />
    <Input {...props} variant="unstyled" placeholder="unstyled" />
  </>
);

Variants.args = {
  size: "md",
};

Variants.argTypes = {
  size: {
    control: "select",
    options: ["xs", "sm", "md", "lg"],
  },
};

export const WithAddon = (props: Args) => (
  <Input.Group>
    <Input
      {...props}
      addonBefore={<Input.AddonBefore>https://</Input.AddonBefore>}
      addonAfter={<Input.AddonAfter>.com</Input.AddonAfter>}
    />
  </Input.Group>
);

WithAddon.args = {
  variant: "outline",
};

WithAddon.argTypes = {
  variant: {
    control: "select",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
};

export const WithAffix = (props: Args) => {
  const GithubIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1779 2C6.54977 2 2 6.58331 2 12.2535C2 16.786 4.9152 20.6226 8.95935 21.9805C9.46497 22.0826 9.65018 21.7599 9.65018 21.4885C9.65018 21.2508 9.63351 20.436 9.63351 19.587C6.80227 20.1983 6.21269 18.3647 6.21269 18.3647C5.75769 17.1764 5.08353 16.871 5.08353 16.871C4.15687 16.2429 5.15103 16.2429 5.15103 16.2429C6.17894 16.3108 6.71831 17.2954 6.71831 17.2954C7.6281 18.857 9.09414 18.4158 9.68393 18.1441C9.76809 17.482 10.0379 17.0237 10.3243 16.7691C8.06623 16.5314 5.6904 15.6487 5.6904 11.7102C5.6904 10.5898 6.09457 9.67309 6.73498 8.96018C6.63394 8.7056 6.27998 7.65289 6.83623 6.24394C6.83623 6.24394 7.6956 5.97228 9.6333 7.29644C10.4629 7.07199 11.3185 6.95782 12.1779 6.95685C13.0372 6.95685 13.9133 7.07581 14.7222 7.29644C16.6601 5.97228 17.5195 6.24394 17.5195 6.24394C18.0758 7.65289 17.7216 8.7056 17.6206 8.96018C18.2778 9.67309 18.6653 10.5898 18.6653 11.7102C18.6653 15.6487 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6703C14.7054 20.0453 14.6887 21.1489 14.6887 21.4883C14.6887 21.7599 14.8741 22.0826 15.3795 21.9808C19.4237 20.6224 22.3389 16.786 22.3389 12.2535C22.3555 6.58331 17.7891 2 12.1779 2Z"
        fill="#24292F"
      />
    </svg>
  );

  return (
    <Input.Group>
      <Input
        {...props}
        prefix={
          <Input.Prefix>
            <GithubIcon />
          </Input.Prefix>
        }
        suffix={
          <Input.Suffix>
            <GithubIcon />
          </Input.Suffix>
        }
      />
    </Input.Group>
  );
};

WithAffix.args = {
  variant: "outline",
};

WithAffix.argTypes = {
  variant: {
    control: "select",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
};

export const WithAddonAndAffix = (props: Args) => {
  const GithubIcon = () => (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12.1779 2C6.54977 2 2 6.58331 2 12.2535C2 16.786 4.9152 20.6226 8.95935 21.9805C9.46497 22.0826 9.65018 21.7599 9.65018 21.4885C9.65018 21.2508 9.63351 20.436 9.63351 19.587C6.80227 20.1983 6.21269 18.3647 6.21269 18.3647C5.75769 17.1764 5.08353 16.871 5.08353 16.871C4.15687 16.2429 5.15103 16.2429 5.15103 16.2429C6.17894 16.3108 6.71831 17.2954 6.71831 17.2954C7.6281 18.857 9.09414 18.4158 9.68393 18.1441C9.76809 17.482 10.0379 17.0237 10.3243 16.7691C8.06623 16.5314 5.6904 15.6487 5.6904 11.7102C5.6904 10.5898 6.09457 9.67309 6.73498 8.96018C6.63394 8.7056 6.27998 7.65289 6.83623 6.24394C6.83623 6.24394 7.6956 5.97228 9.6333 7.29644C10.4629 7.07199 11.3185 6.95782 12.1779 6.95685C13.0372 6.95685 13.9133 7.07581 14.7222 7.29644C16.6601 5.97228 17.5195 6.24394 17.5195 6.24394C18.0758 7.65289 17.7216 8.7056 17.6206 8.96018C18.2778 9.67309 18.6653 10.5898 18.6653 11.7102C18.6653 15.6487 16.2895 16.5143 14.0145 16.7691C14.3854 17.0916 14.7054 17.7026 14.7054 18.6703C14.7054 20.0453 14.6887 21.1489 14.6887 21.4883C14.6887 21.7599 14.8741 22.0826 15.3795 21.9808C19.4237 20.6224 22.3389 16.786 22.3389 12.2535C22.3555 6.58331 17.7891 2 12.1779 2Z"
        fill="#24292F"
      />
    </svg>
  );

  return (
    <Input.Group>
      <Input
        prefix={
          <Input.Prefix>
            <GithubIcon />
          </Input.Prefix>
        }
        suffix={
          <Input.Suffix>
            <GithubIcon />
          </Input.Suffix>
        }
        addonBefore={<Input.AddonBefore>https://</Input.AddonBefore>}
        addonAfter={<Input.AddonAfter>.com</Input.AddonAfter>}
        {...props}
      />
    </Input.Group>
  );
};

WithAddonAndAffix.args = {
  variant: "outline",
};

WithAddonAndAffix.argTypes = {
  variant: {
    control: "select",
    options: ["outline", "filled", "flushed", "unstyled"],
  },
};

export const WithClearButton = (props: Args) => (
  <Input.Group>
    <Input {...props} allowClear placeholder="Clearable Input" />
  </Input.Group>
);
