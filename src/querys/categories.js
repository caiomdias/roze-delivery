import { createQuery } from "../services/Apollo";

const GET_CATEGORIES = createQuery`
	query allCategoriesSearch {
		allCategory {
		title
		id
		}
  }
`;

export {
	GET_CATEGORIES
}