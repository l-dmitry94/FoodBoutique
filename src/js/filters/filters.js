import { common } from "../common/common"
import { saveData } from "../services/storage"

export function storageFilters () {
    const filters = {
        keyword: null,
        category: null,
        page: 1,
        limit: 6
    }

    saveData(filters, common.FILTERS_KEY)
}