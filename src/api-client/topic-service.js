import {httpClient} from "./http-client";
import {Endpoints} from "./endpoints";

class TopicService {
  #client

  constructor(httpClient) {
    this.#client = httpClient;
  }

  getTopics() {
    return this.#client.get(Endpoints.Topics());
  }


  getTopicById(id) {
    return this.#client.get(Endpoints.TopicById(id));
  }


  getTopicAnswersByTopicId(id) {
    return this.#client.get(Endpoints.AnswersByTopicId(id));
  }


  createTopic(topic) {
    return this.#client.post(Endpoints.Topics(), topic);
  }


  updateTopic(id, topic) {
    return this.#client.put(Endpoints.TopicById(id), topic);
  }


  deleteTopicById(id) {
    return this.#client.delete(Endpoints.TopicById(id));
  }
}

const TopicServiceAPI = new TopicService(httpClient);

export {TopicServiceAPI};
