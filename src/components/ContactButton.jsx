import React from "react";

const ContactButton = () => {
  return (
    <Button
      sx={{
        marginTop: '20px',
        backgroundColor: '#FFD700',
        color: 'black',
        fontSize: '15px',
        fontWeight: '400',
        width: '150px',
        height: '45px',
        '&:hover': {
          backgroundColor: 'gray',
        }
      }}
      variant="contained"
      endIcon={<Circle />} style={{ borderRadius: '30px', }}
    >
      CONTACT Me
    </Button>
  );
};

export default ContactButton;
