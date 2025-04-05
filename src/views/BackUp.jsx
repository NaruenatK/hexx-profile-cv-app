{/* Let's Connect */ }
<Box sx={{
    display: 'flex',
    backgroundColor: 'black',
    width: '800px',
    mt: '80px',
    // border: '1px solid #FFFFFF'
}}>
    <Typography sx={{
        color: '#FFFFFF',
        fontSize: '40px',
        fontWeight: 'bold',
        marginBottom: '20px' // เพิ่มระยะห่างด้านล่างของหัวข้อ
    }}>
        My Capabilities
    </Typography>

    <Typography sx={{
        color: '#FFFFFF',
        fontSize: '20px',
        fontWeight: '200',
        textAlign: 'left',
        mt: '60px',
        ml: '-285px',
        lineHeight: '1.5' // กำหนดระยะห่างระหว่างบรรทัด
    }}>
        Say Hello at {" "}
        <Link style={{ color: '#FFFFFF', textDecorationColor: '#d3ea78' }}>
            6752D10005@sau.ac.th
        </Link>
        <br />
        For more info, here's my {" "}
        <Link style={{ color: '#FFFFFF', textDecorationColor: '#d3ea78' }}>
            resume
        </Link>


    </Typography>
</Box>