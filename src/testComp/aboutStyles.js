const styles = {
  container: {
    display: "flex",
    flexDirection: "column", // Stack items vertically
    margin: "0 auto",
    padding: "20px",
    textAlign: "center",
    alignItems: "center", // Center text vertically within items
    justifyContent: "center",
  },

  heading: {
    width: "444px",
    height: "104px",
    flexShrink: 0,
    color: "#FFF",
    textShadow: "1px 3px 3px rgba(0, 0, 0, 0.11)",
    fontFamily: "Karla, sans-serif",
    fontSize: "60px",
    fontWeight: 400,
    paddingTop: "50px",
    paddingBottom: "100px",
  },

  text: {
    margin: "20px 0", // Add space between items
    color: "#FFF",
    textShadow: "1px 3px 3px rgba(0, 0, 0, 0.11)",
    fontFamily: "Karla, sans-serif",
    fontSize: "34px",
    fontWeight: 50,
    flexShrink: 0,
    paddingLeft: "200px",
    paddingRight: "200px",
  },
};

export default styles;
