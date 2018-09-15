using System.Web.Mvc;
using Microsoft.VisualStudio.TestTools.UnitTesting;
using WhereIsTheSee.Api;
using WhereIsTheSee.Api.Controllers;

namespace WhereIsTheSee.Api.Tests.Controllers
{
    [TestClass]
    public class HomeControllerTest
    {
        [TestMethod]
        public void Index()
        {
            // Arrange
            HomeController controller = new HomeController();

            // Act
            ViewResult result = controller.Index() as ViewResult;

            // Assert
            Assert.IsNotNull(result);
            Assert.AreEqual("Home Page", result.ViewBag.Title);
        }
    }
}
