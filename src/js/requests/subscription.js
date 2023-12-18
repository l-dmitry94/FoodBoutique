import { apiSubscription } from "../services/api";

export async function fetchSubscription(email) {
    const response = await apiSubscription({
        method: "POST",
        data: {
            email
        }
    })

    return response.data;
}