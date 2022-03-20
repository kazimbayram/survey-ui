import {httpClient} from "./http-client";
import {Endpoints} from "./endpoints";

class SurveyService {
  #httpClient

  constructor(httpClient) {
    this.#httpClient = httpClient;
  }

  getSurveyById(topicId) {
    return this.#httpClient.get(Endpoints.SurveyById(topicId));
  }

  postSubmitAnswer(topicId, answer) {
    return this.#httpClient.post(Endpoints.SurveyById(topicId), answer);
  }
}

const SurveyServiceAPI = new SurveyService(httpClient);

export {SurveyServiceAPI};
