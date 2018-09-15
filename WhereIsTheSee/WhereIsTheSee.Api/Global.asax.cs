using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Http;
using System.Web.Mvc;
using System.Web.Optimization;
using System.Web.Routing;
using Newtonsoft.Json.Serialization;

namespace WhereIsTheSee.Api
{
  public class WebApiApplication : System.Web.HttpApplication
  {
    protected void Application_Start()
    {
      AreaRegistration.RegisterAllAreas();
      GlobalConfiguration.Configure(WebApiConfig.Register);
      FilterConfig.RegisterGlobalFilters(GlobalFilters.Filters);
      RouteConfig.RegisterRoutes(RouteTable.Routes);
      BundleConfig.RegisterBundles(BundleTable.Bundles);

      GlobalConfiguration.Configuration
        .Formatters
        .JsonFormatter
        .SerializerSettings
        .ContractResolver = new CamelCasePropertyNamesContractResolver();
    }

    protected void Application_BeginRequest()
    {
      if (Request.HttpMethod == "OPTIONS")
      {
        Response.Clear();
        Response.Headers.Remove("Access-Control-Allow-Origin");
        Response.Headers.Remove("Access-Control-Allow-Headers");
        Response.Headers.Remove("Access-Control-Allow-Methods");
        Response.Headers.Add("Access-Control-Allow-Origin", "*");
        Response.Headers.Add("Access-Control-Allow-Headers", "*");
        Response.Headers.Add("Access-Control-Allow-Methods", "*");
        Response.Flush();
        Response.End();
      }
    }
  }
}
