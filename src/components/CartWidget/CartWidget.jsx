import LocalMallIcon from "@mui/icons-material/LocalMall";

const CartWidget = () => {
    return ( 
        <div style = {{ display: "flex" }}>
            <LocalMallIcon/>
            <span>4</span>
        </div>
    );
};

export default CartWidget;
