import auth from "./Auth";
import hr from "./HR";
import work from "./Work"
import message from "./Message"
const AccessControl={
    ...auth,
    ...hr,
    ...work,
    ...message
}
export default AccessControl;