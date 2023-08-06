const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column', // Stack items vertically
    alignItems: 'flex-start',
    margin: '0 auto',
    padding: '20px',
    textAlign: 'center',
    alignItems: 'center', // Center text vertically within items
    justifyContent: 'center',
  },
  heading: {
    width: '444px',
    height: '104px',
    flexShrink: 0,
    color: '#FFF',
    textShadow: '1px 7px 3px rgba(0, 0, 0, 0.11)',
    fontFamily: 'Karla, sans-serif',
    fontSize: '96px',
    fontStyle: 'normal',
    fontWeight: 400,
    lineHeight: 'normal',
  },
  text: {
    margin: '20px 0', // Add space between items
    color: '#FFF',
    textShadow: '1px 7px 3px rgba(0, 0, 0, 0.11)',
    fontFamily: 'Karla, sans-serif',
    fontSize: '48px',
    fontStyle: 'normal',
    fontWeight: 50,
    lineHeight: 'normal',
    flexShrink: 0,
  },
};

export default styles;