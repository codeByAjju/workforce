import adminDash from "./AdminDash/index.route"

export default function route() {
    return [
      ...adminDash(),
    ]
}