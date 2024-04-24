# Anatomy

![image](https://github.com/f-lab-edu/design-hub/assets/84058944/ff4cfc10-af10-49fc-8a32-fe0e37a55fc8)


# Usage

```js
import { ArrowIcon, Menu } from "@hub/hds/components";


function CustomMenu() {
  const [current, setCurrent] = useState(0); // controlled 컴포넌트로 사용할 수도 있습니다.

  return (
    <Menu.Root
      defaultOpen
      onSelect={(idx: number) => {setCurrent(idx)}
    >
      <Menu.Trigger rightAddon={<ArrowIcon />}>메뉴 리스트</Menu.Trigger> // ArrowIcon 이외에도 ReactNode 를 rightAddon 으로 넘길 수 있습니다.  
      <Menu.List>
        <Menu.Item>1번</Menu.Item>
        <Menu.Item>2번</Menu.Item>
      </Menu.List>
    </Menu.Root>
  );
}
```

# Menu

메뉴는 탐색에 사용되며 웹 페이지 작동의 중요한 부분인 기능을 제공하는 데 사용됩니다.  
예를 들어, 네비게이션 메뉴는 웹 페이지의 구조를 나타내고, 어플리케이션 메뉴는 어플리케이션 기능에 대한 접근을 제공합니다.  
따라서, 메뉴는 웹 페이지 탐색, 어플리케이션 실행에 있어서 중요한 역할을 합니다.  

드롭다운 메뉴는 하위 메뉴에 도달하기 위한 방식입니다.  
Fly-out 이라고도 하는데 마우스를 호버했을때 하위 메뉴들이 나타남으로서 탐색하려는 대상의 계층적 구조를 보여줄 수 있습니다.  
