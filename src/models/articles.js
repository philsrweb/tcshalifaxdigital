import { Firebase, FirebaseRef } from '../lib/firebase';
import initState from '../store/articles';

export default {
  /**
   *  Initial state
   */
  state: {
    articles: initState.articles,
    meals: initState.meals,
  },

  /**
   * Reducers
   */
  reducers: {
    replaceMeals(state, payload) {
      return {
        ...state,
        meals: payload,
      };
    },
    replaceArticles(state, payload) {
      let articles = [];
      // Pick out the props I need
      if (payload && typeof payload === 'object') {
        articles = payload.map(item => ({
          id: item.id,
          title: item.title,
          body: item.body,
          category: item.category,
          image: item.image,
          author: item.author,
        }));
      }

      return { ...state, articles };
    },
  },

  /**
   * Effects/Actions
   */
  effects: () => ({
    /**
     * Get Meals
     *
     * @return {Promise}
     */
    getCategories() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise((resolve, reject) => FirebaseRef.child('categories').once('value')
        .then((snapshot) => {
          const data = snapshot.val() || [];
          this.replaceMeals(data);
          return resolve();
        }).catch(reject)).catch((err) => { throw err.message; });
    },

    /**
      * Get Articles
      *
     * @return {Promise}
      */
    getArticles() {
      if (Firebase === null) return () => new Promise(resolve => resolve());

      return new Promise(resolve => FirebaseRef.child('articles')
        .on('value', (snapshot) => {
          const data = snapshot.val() || [];
          this.replaceArticles(data);
          return resolve();
        })).catch((err) => { throw err.message; });
    },
  }),
};
