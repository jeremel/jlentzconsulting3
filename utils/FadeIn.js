export default function FadeIn({ children }) {
  const el = useRef();

  useLayoutEffect(() => {
    gsap.fromTo(
      el.current.children,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        duration: 2,
      }
    );
  }, []);

  return <span ref={el}>{children}</span>;
}
