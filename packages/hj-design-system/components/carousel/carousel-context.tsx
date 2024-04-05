import { ReactNode, createContext, useContext, useMemo, useState } from "react";

interface CarouselContext {
  /**
   * Current index of the carousel
   */
  current: number;
  /**
   * Set the current index of the carousel
   */
  changeCurrent: (index: number) => void;
  /**
   * Total number of items in the carousel
   */
  total: number;
  /**
   * Set the total number of items in the carousel
   */
  changeTotal: (total: number) => void;
}

const CarouselContext = createContext<CarouselContext | null>(null);

interface ContextProvider {
  /**
   * Current index of the carousel
   */
  current?: number;
  children: ReactNode;
}

export const CarouselProvider = ({ children, current }: ContextProvider) => {
  const [currentIndex, setCurrentIndex] = useState(current || 0);
  const [total, setTotal] = useState(0);

  const ContextValue = useMemo(
    () => ({
      current: current || currentIndex,
      changeCurrent: setCurrentIndex,
      total,
      changeTotal: setTotal,
    }),
    [currentIndex, total]
  );

  return (
    <CarouselContext.Provider value={ContextValue}>
      {children}
    </CarouselContext.Provider>
  );
};

export const useCarousel = () => {
  const context = useContext(CarouselContext);

  if (!context) {
    throw new Error(
      "useCarousel must be used within a CarouselProvider. Did you forget to wrap your component in a Carousel.Root?"
    );
  }

  return context;
};
