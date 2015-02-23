//varnishd -s malloc,1G -a 127.0.0.1:8080 -f local.vcl -n /tmp -F
vcl 4.0;

backend hrms_backend {
    .host = "127.0.0.1";
    .port = "1337";
}

backend hrms_frontend {
    .host = "127.0.0.1";
    .port = "3000";
}

sub vcl_recv {
  set req.http.host = "127.0.0.1";

  if (req.url ~ "/api/") {
    set req.url = regsub(req.url, "/api", "");
    set req.backend_hint = hrms_backend;
  } else {
    set req.backend_hint = hrms_frontend;
  }

  return (pass);
}
