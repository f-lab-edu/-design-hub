# Anatomy
![image](https://github.com/f-lab-edu/design-hub/assets/84058944/6f25ed56-b2fa-490f-baee-34681bd9b726)

# Usage
```tsx
import { Modal } from "@hub/hds/components";

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>open modal</button>
      <Modal.Root isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <Modal.Content>
          <Modal.Header>Modal Title</Modal.Header>
          <Modal.Body>
            Modal Body
          </Modal.Body>
          <Modal.Footer>
            <button>ok</button>
            <button onClick={() => setIsOpen(false)}>close</button>
          </Modal.Footer>
        </Modal.Content>
      </Modal.Root>
    </>
  );
}
```

# Dialog 과 Modal 은 어떻게 다를까요?

## Dialog
Dialog 는 현재 창이나 다른 대화 상자에 겹쳐지는 대화 상자 요소입니다.  
사용자에게 정보를 보여주거나, 사용자의 응답을 받는 목적으로 사용됩니다.  
Dialog 는 Modal 과 Non-Modal Dialog 를 포함한 대화 구성 요소를 나타냅니다. 
`<dialog>` 태그는 Modal 과 Non-Modal Dialog 를 모두 구현할때 사용할 수 있는 요소입니다.  

## Modal
그렇다면 Modal 과  Non-Modal Dialog 는 어떻게 다를까요?
`Modal Dialog` 아래의 창은 비활성화되어 사용자는 외부의 콘텐츠와 상호 작용할 수 없습니다. 또한, 외부의 콘텐츠는 대개 시각적으로 가려지거나 흐리게 표시됩니다. 일반적인 구현에서는 외부 콘텐츠를 클릭하는 등 상호 작용하려고 시도하면 Modal Dialog 가 닫힙니다.  
`Non-Modal Dialog` 는 사용자가 여전히 외부 콘텐츠와 상호 작용할 수 있습니다.

참고:
- [https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog](https://developer.mozilla.org/ko/docs/Web/HTML/Element/dialog)
- [https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/](https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/)https://www.w3.org/WAI/ARIA/apg/patterns/dialog-modal/examples/dialog/


# Modal 컴포넌트는 Portal 컴포넌트를 확장합니다

[Portal 컴포넌트](https://github.com/f-lab-edu/design-hub/blob/main/packages/hj-design-system/components/portal/portal.tsx)는 사용자가 원하는 위치에 UI 를 렌더링할 수 있게 해줍니다.    
이는 모달 컴포넌트 같은 오버레이 요소들이 전체 페이지 위에 떠 있을 수 있도록 하면서도, 문서 흐름에서는 독립적으로 관리될 수 있게 해줍니다.   

<br/>

모달 컴포넌트는 사용자와의 상호작용 중에 정보를 표시하거나 사용자 입력을 받기 위해 현재 화면 위에 겹쳐서 표시되는 대화 상자입니다.   

모달의 구현에 포탈을 사용함으로써, 모달이 페이지의 나머지 부분과 겹치면서도 별도의 DOM 노드에 렌더링될 수 있습니다. 이 접근 방식은 모달을 페이지의 어느 위치에나 자유롭게 렌더링할 수 있는 유연성을 제공합니다.  

이러한 유연성을 더욱 확장하기 위해, 우리는 disablePortal과 portalContainer라는 두 가지 prop을 제공합니다:  

- disablePortal prop은 모달이 기본적으로 포탈을 사용하지 않고, 대신 DOM의 현재 트리 내에서 직접 렌더링되도록 할 수 있습니다. 이는 특정 상황에서 모달을 페이지의 특정 부분과 더 밀접하게 통합하고 싶을 때 유용할 수 있습니다.
- portalContainer prop은 모달이 렌더링될 DOM 노드를 명시적으로 지정할 수 있게 해줍니다. 이를 통해 개발자는 모달이 페이지 내에서 특정 위치에 렌더링되도록 세밀하게 제어할 수 있습니다.
