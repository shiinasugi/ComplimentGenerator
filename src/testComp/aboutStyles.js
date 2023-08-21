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
    flexShrink: 0,
    color: "#FFF",
    textShadow: "1px 3px 3px rgba(0, 0, 0, 0.11)",
    fontFamily: "Karla, sans-serif",
    fontSize: "60px",
    fontWeight: 400,
    paddingTop: "100px",
    paddingBottom: "50px",
  },

  firstText: {
    margin: "20px 0", // Add space between items
    color: "#FFF",
    textShadow: "1px 3px 3px rgba(0, 0, 0, 0.11)",
    fontFamily: "Karla, sans-serif",
    fontSize: "30px",
    fontWeight: 50,
    flexShrink: 0,
    paddingLeft: "100px",
    paddingRight: "100px",
    textAlign: "left",
  },

  text: {
    margin: "20px 0",
    color: "#F8F8F8",
    fontFamily: "Karla, sans-serif",
    fontSize: "20px",
    fontWeight: 50,
    flexShrink: 0,
    paddingTop: "50px",
    paddingLeft: "200px",
    paddingRight: "200px",
    textAlign: "left",
  },
};

export default styles;
