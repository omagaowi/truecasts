// BottomSheetProvider.tsx
import React, {
  createContext,
  useRef,
  useContext,
  useCallback,
  forwardRef,
  useImperativeHandle,
} from "react";
import {
  BottomSheetModal,
  BottomSheetModalProvider,
  BottomSheetView,
} from "@gorhom/bottom-sheet";
import { Button, Text } from "react-native";

type BottomSheetContextType = {
  openSheet: () => void;
  closeSheet: () => void;
};

const BottomSheetContext = createContext<BottomSheetContextType | null>(null);

export const useBottomSheet = () => {
  const ctx = useContext(BottomSheetContext);
  if (!ctx)
    throw new Error(
      "useBottomSheet must be used within BottomSheetProvider"
    );
  return ctx;
};

// This inner modal handles the forwarded ref 
const InnerModal = forwardRef<BottomSheetModal>((_, ref) => {
  const internalRef = useRef<BottomSheetModal>(null);

  useImperativeHandle(ref, () => ({
    present: () => internalRef.current?.present(),
    close: () => internalRef.current?.close(),
  }));

  return (
    <BottomSheetModal
      ref={internalRef}
      index={-1}
      snapPoints={["30%", "60%"]}
      enablePanDownToClose
    >
      <BottomSheetView style={{backgroundColor: 'blue', padding: 20, flex: 1 }}>
        <Text>Hello from global sheet!</Text>
      </BottomSheetView>
    </BottomSheetModal>
  );
});

export const BottomSheetProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const modalRef = useRef<BottomSheetModal>(null);

  const openSheet = useCallback(() => {
    console.log("openSheet():", modalRef.current);
    modalRef.current?.present();
  }, []);

  const closeSheet = useCallback(() => {
    modalRef.current?.close();
  }, []);

  return (
    <BottomSheetModalProvider>
      <BottomSheetContext.Provider value={{ openSheet, closeSheet }}>
        {children}
        <InnerModal ref={modalRef} />
        {/* <Button title="Test Sheet" onPress={openSheet} /> */}
      </BottomSheetContext.Provider>
      {/* <Button onPress={openSheet} title="Test Global Sheet" /> */}
    </BottomSheetModalProvider>
  );
};
