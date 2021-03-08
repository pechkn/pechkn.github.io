# How web works
*Internet* is the global system of connected computer networks. Basically, it can be put another way: computers of global network are servers, and files they hold
are websites.

**Server**, or **Hosting** is the computer that has access to network and can share data to other computers. In fact, almost any computer can be server. Some
companies provide **hosting services** - they share their computer resources with anyone to place data there for some cost.

Any computer with internet access has unique **Internet Protocol (IP) address** to communicate with other devices in network. Any device in the same network can
be accessed by IP address. IPs can be static or dynamic (change periodically).

One computer can perform many internet-related tasks, e. g. act as multiple servers, and thus has multiple **ports**. Port is a number written with a colon after
IP address. Any connection with IP accesses it through some port.

**Hypertext Transfer Protocol (HTTP)** is what allows data sharing. It represents international standart of accessing websites. By default, port *80* is used to
access webpage. HTTP shares **Create, read, update and delete (CRUD)** interface convention and has multiple request types respectively to CRUD: 

- *POST* is used to submit data to the specified resource

- *GET* requests and retrieves data of the specified resource

- *PUT* replaces all data of the target resource with the request payload

- *DELETE* deletes the specified data

- *HEAD* asks for a response identical to that of a GET request, but without the response body

- *CONNECT* establishes a tunnel to the server identified by the target resource

- *OPTIONS* is used to describe the communication options for the target resource

- *TRACE* performs a message loop-back test along the path to the target resource

- *PATCH* is used to apply partial modifications to data

HTTP responses of target server are grouped in five classes:

- *Informational* responses (100–199)

- *Successful* responses (200–299)

- *Redirects* (300–399)

- *Client* errors (400–499)

- *Server* errors (500–599)

**Hypertext Transfer Protocol Secure (HTTPS)** is more prevalent today. That's basically encrypted and more secure version of HTTP, which also uses port 443 instead
of 80.

**Representational state transfer (REST)** is a messaging protocol which uses a subset of HTTP and **JavaScript Object Notation (JSON)** and is used to create Web
services called *RESTful*. Such service must provide it's resources as text and allow them to be read and modified with a stateless protocol and a predefined set
of operations. This approach allows interoperability between the computer systems that provide these services. REST assumes creation of **endpoints**, 
address-interface exposed by server, like *GET /articles/* for getting news articles, *POST /articles/* for adding a new article or *DELETE /articles/:id* to delete
an existing article with the given ID. Another, older and less popular protocol is **Simple Object Access Protocol (SOAP)**. It's purpose is to provide extensibility,
neutrality, verbosity and independence via usage of **Extensible Markup Language (XML)** and relying on application layer protocols, usually HTTP.

**Website** is some set of files, primarily document written in **HyperText Markup Language (HTML)**. It can be placed on computer with Internet access or without one.

**Domain** is, simply taken, website address. It is unique string that can be used as server address without relying on it’s IP. Domains are formed by **Domain
Naming System (DNS)** rules and consist of multiple parts, at least two - some string and **Top Level Domain (TLD)**. TLDs aren’t random and can only be obtained
from special organizations providing **domain registration services** for some cost.

**Browser** is a software for retrieving websites from servers and displaying them to user. Web browser consists of **Uniform Resource Locator (URL)** handler,
which is responsible for finding specific servers and connecting to them, and **rendering engine**, which converts HTML document to acceptable view.

**Cross-Origin Resource Sharing (CORS)** is an HTTP-header based mechanism that allows a server to indicate it' own domains from which browser is allowed to load
resources. This mechanism makes possible secure cross-origin requests and data transfers between browsers and servers, and is implemented via preliminary request
that checks if connection is possible.

**Socket** is a software structure within a network node of a computer network that serves as an endpoint for sending and receiving data continuously in real time.
The structure and properties of a socket are defined by an **Application Programming Interface (API)** for the networking architecture. Sockets are created only during
the lifetime of a process of an application running in the node. It's externally identified to other hosts by socket address.

To improve network speed and efficiency, **Content distribution network (CDN)** is used. It's a geographically distributed network of proxy servers and their data
centers. The goal is to provide high availability and performance by distributing the content from the closest server to user. Also it can help with handling of
**Denial-of-service (DoS)** attacks, when servers are flooded with superfluous requests in attempt to overload systems and prevent legitimate requests from being
fulfilled.

Important to note the **Open Web Application Security Project (OWASP)**, nonprofit foundation that works to improve the security of software. It monitors possible
vulnerabilities in web and publishes their summaries regularly. OWASP is very useful information resource for web-developers.

*Let's summarize*. There is one computer, that is used to access the website, let's call it *client*, and another, that hosts website, as we call it, *server*. 
The moment *client* enters some URL into browser, browser connects with DNS server, finds IP of server, related with entered in URL field domain name, checks
possibility of CORS connection and requests hypertext document using HTTP or HTTPS protocol in format IP:port, then renders received document and displays it.
