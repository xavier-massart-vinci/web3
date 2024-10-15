import App from "components/App/App";
import { ProviderWrapper as VoteProviderWrapper } from "./context/ProviderWrapper";

const AppLoader = () => {
    return (
        <VoteProviderWrapper>
            <App />
        </VoteProviderWrapper>
    )
}

export default AppLoader;