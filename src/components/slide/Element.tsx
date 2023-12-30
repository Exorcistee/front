interface ElementSlideProps {
  element: string;
}

export function ElementSlide(
  { element }: ElementSlideProps
) {
  if (element == 'text') {
    return (
      <div>
        <span>This is text</span>
      </div>
    )
  }
  else if (element == 'shape') {
    return (
      <div>
        <svg
          height = "1000"
          width = "1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <ellipse
            cx={50}
            cy={50}
            rx={50}
            ry={50}
          />

        </svg>
      </div>  )
  }
  else {

    return (
      <div>
        <img
          height={100}
          src = "~/public/logo512.png"
          width={100}
        >
        </img>
      </div>
    )
  }
}
