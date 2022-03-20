export const Endpoints = {
    SurveyById: (id) => `survey/${id}`,
    Topics: () => `topic`,
    TopicById: (id) => `topic/${id}`,
    AnswersByTopicId: (id) => `topic/${id}/answers`,
}
