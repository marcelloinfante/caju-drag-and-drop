import { renderHook, act } from "@testing-library/react-hooks";

import useBoolean from "./useBoolean";

describe("useBoolean", () => {
  describe("default", () => {
    it("should return false when undefined", () => {
      const { result } = renderHook(() => useBoolean());

      expect(result.current.value).toBeFalsy();
    });

    it("should return false", () => {
      const { result } = renderHook(() => useBoolean(false));

      expect(result.current.value).toBeFalsy();
    });

    it("should return true", () => {
      const { result } = renderHook(() => useBoolean(true));

      expect(result.current.value).toBeTruthy();
    });
  });

  it("should return true when onTrue is called", () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => {
      result.current.onTrue();
    });

    expect(result.current.value).toBeTruthy();
  });

  it("should return false when onFalse is called", () => {
    const { result } = renderHook(() => useBoolean(true));

    act(() => {
      result.current.onFalse();
    });

    expect(result.current.value).toBeFalsy();
  });

  it("should return opposite when onToggle is called", () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => {
      result.current.onToggle();
    });

    expect(result.current.value).toBeTruthy();
  });

  it("should return passed value when setValue is called", () => {
    const { result } = renderHook(() => useBoolean(false));

    act(() => {
      result.current.setValue(true);
    });

    expect(result.current.value).toBeTruthy();
  });
});
