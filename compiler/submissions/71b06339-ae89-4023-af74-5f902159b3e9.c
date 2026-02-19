typedef struct {
    char user_id[64];
    void* data;
    time_t timestamp;
} Session;

typedef struct {
    Session* sessions;
    int count;
    int capacity;
} SessionCache;

void addSession(SessionCache* cache, const char* userId, void* data) {
    Session session;
    strcpy(session.user_id, userId);
    session.data = data;
    session.timestamp = time(NULL);
    cache->sessions[cache->count++] = session;
}

void* getSession(SessionCache* cache, const char* userId) {
    for (int i = 0; i < cache->count; i++) {
        if (strcmp(cache->sessions[i].user_id, userId) == 0) {
            return cache->sessions[i].data;
        }
    }
    return NULL;
}