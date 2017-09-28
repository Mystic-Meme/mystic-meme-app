<Motion
  defaultStyle={{ opacity: 0 }}
  style={{ opacity: spring(1, { stiffness: 5 }) }}
>
  {interpolatingStyle => (
    <h1 className="title-card" style={interpolatingStyle}>
      The door creaks as you push it in, stepping into the dim light of a
      small cluttered room. The smell reminds you of your grandparents'
      attic, the smell of things long forgtten, memories that have faded
      to dust...
    </h1>
  )}
</Motion>*/
