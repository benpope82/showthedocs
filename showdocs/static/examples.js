var examples = {};

examples['nginx'] = `log_format timed_combined '$remote_addr - $remote_user [$time_local]  '
    '"$request" $status $body_bytes_sent '
    '"$http_referer" "$http_user_agent" '
    '$request_time';

server {
    listen      80;
    server_name showthedocs.com;

    access_log  /home/showthedocs/logs/nginx-access.log timed_combined;
    error_log   /home/showthedocs/logs/nginx-error.log;

    gzip        on;
    gzip_min_length 1000;

    location / {
        include uwsgi_params;
        uwsgi_pass unix:/tmp/uwsgi.sock;
    }
}`;

var sql = `SELECT DISTINCT city
FROM weather
ORDER BY city;`;

examples['postgresql'] = sql;
examples['mysql'] = sql;
