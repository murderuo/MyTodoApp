import { useTheme } from "../../context/ThemeContext";

function Theme() {
  const { theme, setTheme } = useTheme();
  return (
    <>
      This is theme component
      <div>
        <br />
        Theme:{theme}
        <br />
        <div>
          <button onClick={() => setTheme(theme === "black" ? "red" : "black")}>
            Değiştir
          </button>
        </div>
        <hr />
      </div>
    </>
  );
}

export default Theme;
