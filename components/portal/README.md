# Usage

자세한 사용법은 [ModalRoot 컴포넌트](https://github.com/f-lab-edu/design-hub/blob/main/packages/hj-design-system/components/modal/modal-root.tsx) 를 참고해주세요!  

# Portal

Portal 컴포넌트는 React 앱의 DOM 계층 외부에 있는 DOM 노드로 자식을 렌더링할 수 있게 해주는 유틸리티입니다.   
이 컴포넌트는 모달, 툴팁, 알림과 같이 페이지의 나머지 부분과 별개의 UI 영역에 컨텐츠를 렌더링해야 할 때 유용합니다.   
Portal 컴포넌트는 createPortal 메서드를 사용하여 구현되었습니다.   

- 커스텀 컨테이너 지원: 원하는 DOM 노드로 자식을 포털할 수 있습니다. 기본적으로 document.body에 렌더링합니다.
- 포털 비활성화: 필요한 경우 포털 기능을 비활성화하고 자식 요소를 현재 DOM 위치에 직접 렌더링할 수 있습니다.
- Ref 전달: 포털된 컴포넌트에 ref를 전달하여, DOM 엘리먼트에 직접 접근할 수 있습니다.
